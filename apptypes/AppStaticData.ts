import { KeyValueString, Master } from "./AppTypes";

export const StaticMasterData: Master[] = [
  { masterType: "Zonal Masters", downloadStatus: false },
  { masterType: "Branch Master", downloadStatus: false },
  { masterType: "Products Master", downloadStatus: false },
  { masterType: "Geography Master", downloadStatus: false },
  { masterType: "Vehicle Master", downloadStatus: false },
];

export const SourcingFormInitialData = {
  sourcingid: "",
  preferredbranch: "",
  businessdescription: "",
  sourcingchannel: "",
  sourcingname: "",
  branchcode: "",
  leadby: "",
  leadid: "",
  customername: "",
  dob: "",
  mobileno: "",
  productinterested: "",
};

export const OrganizationMasterColumns: KeyValueString = {
  orgCode: "TEXT",
  orgId: "TEXT",
  orgLevel: "TEXT",
  orgName: "TEXT",
  orgScode: "TEXT",
};

export const ProductMasterColumns: KeyValueString = {
  prdSeqId: "TEXT",
  prdCode: "TEXT",
  prdDesc: "TEXT",
};

export const SubProductColumns: KeyValueString = {
  rdValueCode: "TEXT",
  rdValueDescription: "TEXT",
  loanProd: "TEXT",
};

export const StaticDataColumns: KeyValueString = {
  rdValueCode: "TEXT",
  rdValueDescription: "TEXT",
  master_id: "INTEGER NOT NULL DEFAULT ''",
};

export const StateMasterColumns:KeyValueString = {
  sgmStateName: 'TEXT',
  sgmStateCode: 'TEXT',
};

export const CityMasterColumns:KeyValueString = {
  sgmCityCode: 'TEXT',
  sgmCityName: 'TEXT',
  sgmStateCode: 'TEXT',
};