import Joi from "joi";
import { GroupNum } from "../model/Territory";

interface CreateTerritorySearch {
  groupNum: GroupNum;
  territoryNum: number;
  servant: string;
  searchDate: Date;
  territoryNumEnded?: Date | null;
}

export const createSearchValidator = (data: CreateTerritorySearch) => {
  const schema = Joi.object({
    groupNum: Joi.string()
      .valid(...Object.values(GroupNum))
      .messages({
        "string.empty": "Group Number cannot be empty",
        "string.base": "Group Number should be a type of string",
        "any.required": "Group Number is a required field",
        "any.only": "Invalid Employment Type",
      }),

    territoryNum: Joi.number().min(1).max(35).required().messages({
      "number.empty": "Territory Number cannot be empty",
      "number.base": "Territory Number should be a type of number",
      "any.required": "Territory Number is a required field",
    }),
    servant: Joi.string().required().messages({
      "string.required": "Servant is a required field",
      "string.base": "Servant should be a type of string",
      "any.required": "Servant is a required field",
    }),

    searchDate: Joi.date().required().messages({
      "date.base": "Search Date should be a valid date",
      "any.required": "Search Date is a required field",
    }),

    territoryNumEnded: Joi.date().allow(null).messages({
      "date.base": "Territory Number Ended should be a valid date or null",
    }),
  });

  return schema.validate(data);
};
