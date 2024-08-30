import { NextFunction, Request, Response } from "express";
import { createSearchValidator } from "../validator/formValidator";
import Territory from "../model/Territory";

export const addTerritory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { groupNum, territoryNum, servant, searchDate, territoryNumEnded } =
      req.body;

    const { error } = createSearchValidator(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const imgFiles = req.files as {
      searchEndedImg?: Express.Multer.File[];
      toStartSearchImg?: Express.Multer.File[];
    };

    if (!imgFiles) return res.status(400).send("Images are required");
    const searchEndedImg = imgFiles.searchEndedImg?.[0].path;
    const toStartSearchImg = imgFiles.toStartSearchImg?.[0].path;

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

export const getTerritoryHistory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const territories = await Territory.find();

    res.json(territories);
  } catch (error) {
    next(error);
  }
};
