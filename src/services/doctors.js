import doctorsData from "@/data/doctorsData.js";

export const getDoctors = () => {
  return doctorsData;
};

export const getDoctorById = (list, id) => {
  const doctor = list.filter((doctor) => doctor.id === id);
  return doctor[0];
};

export const addDoctor = (list, data) => {
  const doctors = [...list];
  doctors.push(data);
  return doctors;
};

export const updateDoctorById = (list, id, data) => {
  const doctors = list.map((doctor) => {
    if (doctor.id === id) return { ...doctor, ...data };
    else return doctor;
  });

  return doctors;
};

export const deleteDoctorById = (list, id) => {
  const doctors = list.filter((doctor) => doctor.id !== id);
  return doctors;
};
