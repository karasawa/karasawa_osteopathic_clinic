type SymptomModel = {
  id: string;
  body_part: string;
  small_introduction: string;
  big_introduction: string;
  cause: string;
  solution: string;
  image: string;
  created_at: Date;
};

export const getAllSymptoms = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-symptom/`)
  );
  const symptoms = await res.json();
  return symptoms;
};

export const getAllSymptomIds = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-symptom/`)
  );
  const symptoms = await res.json();
  return symptoms.map((symptom: SymptomModel) => {
    return {
      params: {
        id: String(symptom.id),
      },
    };
  });
};

export const getSymptom = async (id: string) => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-symptom/${id}`)
  );
  const symptom = await res.json();
  return symptom;
};
