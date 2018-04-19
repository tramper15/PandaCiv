export interface Building {
  name: string;
  canBuy: boolean;
  isBought: boolean;
  assignedPandas: number;
  woodNeeded: number;
  foodNeeded: number;
  canAssignPandas: boolean;
  resourceType: string;
  perTick: number;
  pandasAccepted: boolean;
}
