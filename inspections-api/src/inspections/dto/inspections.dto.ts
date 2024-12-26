export class VehicleDTO {
  unit: string;
  vehicle_id_number?: string;
  unit_type?: string;
  license_state?: string;
  license_number?: string;

  constructor(data: {
    unit: string;
    vehicle_id_number?: string;
    unit_type?: string;
    license_state?: string;
    license_number?: string;
  }) {
    this.unit = data.unit;
    this.vehicle_id_number = data.vehicle_id_number;
    this.unit_type = data.unit_type;
    this.license_state = data.license_state;
    this.license_number = data.license_number;
  }
}

export class ViolationDTO {
  convicted_of_dif_charge: string;

  constructor(data: { convicted_of_dif_charge: string }) {
    this.convicted_of_dif_charge = data.convicted_of_dif_charge;
  }
}

export class InspectionDTO {
  inspection_date: string;
  report_state: string;
  report_number: string;
  level: string;
  time_weight: string;
  Placarable_HM_Veh_Insp: string;
  HM_inspection: string;
  vehicles: VehicleDTO[];
  violations: ViolationDTO[];
}
