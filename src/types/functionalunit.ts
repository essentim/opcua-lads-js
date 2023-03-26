import { ILADSFunction } from "./function";

export interface ILADSFunctionalUnit {
  assetId?: string;
  componentName: string;
  lock: string;
  methods: string;
  operational: string;
  programManager: string;
  functions: ILADSFunction[];
}
