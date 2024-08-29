import { NextFunction, Request, Response } from "express";
import { createSearchValidator } from "../validator/formValidator";
import Territory from "../model/Territory";

interface MulterRequest extends Request {
  files: {
    searchEndedImg?: Express.Multer.File[];
    toStartSearchImg?: Express.Multer.File[];
  };
}

export const addTerritory = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { groupNum, territoryNum, servant, searchDate, territoryNumEnded } =
      req.body;

    const { error } = createSearchValidator(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    if (!req.files) return res.status(400).send("Images are required");
    const searchEndedImg = req.files.searchEndedImg?.[0].path;
    const toStartSearchImg = req.files.toStartSearchImg?.[0].path;

    console.log(req.files);

    const newSearch = new Territory({
      groupNum,
      territoryNum,
      servant,
      searchDate,
      searchEndedImg,
      toStartSearchImg,
    });

    if (territoryNumEnded) {
      newSearch.terrNumEnded = territoryNumEnded;
    }

    await newSearch.save();

    res.json(newSearch);
  } catch (error) {
    next(error);
  }
};
