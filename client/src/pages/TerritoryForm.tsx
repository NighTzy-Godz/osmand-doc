import {
  Button,
  Checkbox,
  Datepicker,
  FileInput,
  Label,
  Select,
  TextInput,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import territoryNumArray from "../data/territoryNum";
import groupNum from "../data/groupNum";
import { CreateTerritorySearch } from "../data/territoryInterface";
import { toast } from "sonner";
import FileUploader from "../components/FileUploader";
import { useAddSearchHistoryMutation } from "../store/territoryApi";
import { renderError } from "../utils";
import { useNavigate } from "react-router-dom";

function TerritoryForm() {
  const navigate = useNavigate();
  const [addSearchHistory, { error, isSuccess }] =
    useAddSearchHistoryMutation();

  const [isEnded, setIsEnded] = useState(false);
  const [searchDate, setSearchDate] = useState<Date | null>(null);
  const [territoryNumEnded, setTerritoryNumEnded] = useState<Date | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTerritorySearch>();

  const renderTerrNumbers = territoryNumArray.map((item) => {
    return (
      <option value={item.value} key={item.id}>
        {item.name}
      </option>
    );
  });

  const renderGroupNum = groupNum.map((item) => {
    return (
      <option value={item.value} key={item.id}>
        {item.name}
      </option>
    );
  });

  const handleIsEndedToggle = () => {
    setIsEnded(!isEnded);
  };

  useEffect(() => {
    if (error) {
      renderError(error);
    }
    if (isSuccess) {
      toast.success("Added to the Territory Search History!");
      navigate("/territoryHistory");
    }
  }, [isSuccess, error]);

  const handleTerritoryFormSubmit = async (data: CreateTerritorySearch) => {
    const {
      groupNum,
      territoryNum,
      servant,
      searchEndedImg,
      toStartSearchImg,
    } = data;

    if (!searchDate) {
      toast.error("Search Date is a required field");
      return;
    }

    if (isEnded && !territoryNumEnded) {
      toast.error("Territory End Date is a required field");
      return;
    }

    const formData = new FormData();

    formData.append("groupNum", groupNum);
    formData.append("territoryNum", territoryNum as any);
    formData.append("searchDate", searchDate as any);
    formData.append("servant", servant);
    if (searchEndedImg?.[0]) {
      formData.append("searchEndedImg", searchEndedImg[0]);
    }
    if (toStartSearchImg?.[0]) {
      formData.append("toStartSearchImg", toStartSearchImg[0]);
    }
    if (territoryNumEnded) {
      formData.append("territoryNumEnd", territoryNumEnded as any);
    }

    addSearchHistory(formData);
  };

  return (
    <div className="pb-5 md:w-3/4 w-full mx-auto ">
      <div className="w-full bg-mainColor/70 mb-5 px-5 py-2 rounded-3xl">
        <p className="text-textColor">
          {" "}
          <span className="font-semibold">Paalala:</span> Ang form na ito ay
          hindi pa nag po-proceses sa kasalukuyan. Dinevelop muna ito para
          mayroon tayong ideya kung ano ang itsura ng form.
        </p>
      </div>

      <div className="mb-10">
        <h1 className="text-4xl text-mainColor mb-2">
          Territory Searching Form
        </h1>
        <p className="text-textColor text-lg leading-tight">
          Pakisuyo na fill-upan ang form na ito para mayroon tayong track record
          sa ating mga nagawang searching. Maraming Salamat!
        </p>
      </div>

      <form onSubmit={handleSubmit(handleTerritoryFormSubmit)}>
        <div className="mb-5 flex items-center gap-5">
          <div className="w-full">
            <Label htmlFor="terrNum">Territory Number</Label>
            <Select
              id="terrNum"
              {...register("territoryNum", {
                required: "Territory Number is a required field",
              })}
            >
              {renderTerrNumbers}
            </Select>

            {errors.territoryNum && (
              <p className="text-red-400 text-sm font-medium mt-1">
                {errors.territoryNum.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <Label htmlFor="groupNum">Group Number</Label>
            <Select
              id="groupNum"
              {...register("groupNum", {
                required: "Group Number is a required field",
              })}
            >
              {renderGroupNum}
            </Select>
            {errors.groupNum && (
              <p className="text-red-400 text-sm font-medium mt-1">
                {errors.groupNum.message}
              </p>
            )}
          </div>
        </div>

        <div className="w-full mb-5">
          <Label htmlFor="servant">Servant</Label>
          <TextInput
            placeholder="Asino ngay ti nangidaulo iti daytoy a searching?"
            id="servant"
            {...register("servant", {
              required: "Territory Servant is a required field",
            })}
          />

          {errors.servant && (
            <p className="text-red-400 text-sm font-medium mt-1 ">
              {errors.servant.message}
            </p>
          )}
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            {" "}
            <Checkbox onChange={handleIsEndedToggle} />
            <p className=" text-textColor mt-1 leading-none mb-2">
              Nalpas kadin ti daytoy a territory number?
            </p>{" "}
          </div>

          <div className="mb-5 md:flex items-center gap-5">
            <div className="w-full mb-5 md:mb-0">
              <Label>Search Date</Label>
              <Datepicker
                onSelectedDateChanged={(date) => setSearchDate(date)}
                className="cursor-pointer"
              />
            </div>
            <div className="w-full">
              <Label>Territory Number End Date</Label>
              <Datepicker
                onSelectedDateChanged={(date) => setTerritoryNumEnded(date)}
                className="disabled:text-red-400"
                disabled={!isEnded}
              />
            </div>
          </div>

          <div className="w-full mb-5">
            <Label>Saan kayo natapos?</Label>
            <FileUploader
              _id="upload1"
              accept="image/*"
              {...register("searchEndedImg", {
                required: "Search Ended Location is a required field",
              })}
            />
            {errors.searchEndedImg && (
              <p className="text-red-400 text-sm font-medium mt-1">
                {errors.searchEndedImg.message}
              </p>
            )}
          </div>

          <div className="w-full mb-5">
            <Label>Saan ang susunod na gagawin?</Label>
            <FileUploader
              _id="upload2"
              accept="image/*"
              {...register("toStartSearchImg", {
                required: "Continuation of Search Location is a required field",
              })}
            />
            {errors.toStartSearchImg && (
              <p className="text-red-400 text-sm font-medium mt-1">
                {errors.toStartSearchImg.message}
              </p>
            )}
          </div>

          <Button
            className="bg-mainColor text-gelionReg text-textColor"
            type="submit"
          >
            Add Search History
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TerritoryForm;
