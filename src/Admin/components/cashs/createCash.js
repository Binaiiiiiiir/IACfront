import { useEffect, useState } from "react";import {
  Create,
  NumberInput,
  SimpleForm,
  TextInput,
  RadioButtonGroupInput,
  AutocompleteInput,
  SelectInput,
  required,
} from "react-admin";

const validateOperation = required("operation is required");
const validateNature = required("Nature is required");
const validateAmount = required("Amount is required");
const validateLibelle = required("libelle is required");
export const CashCreate = (props) => {
  const [operation, setopeation] = useState("");
  const [nature, setNature] = useState("");
  const [agent, setAgent] = useState("");
  const [students, setstudents] = useState([]);
  const [teachers, setteachers] = useState([]);

  useEffect(() => {
    fetch("https://iacback.herokuapp.com/student").then(async (res) => {
      const data = await res.json();
      setstudents(data);
    });
    fetch("https://iacback.herokuapp.com/teacher").then(async (res) => {
      const data = await res.json();
      setteachers(data);
    });
    setAgent(localStorage.getItem("userId"));
  }, []);

  return (
    <Create redirect='list' {...props}>
      <SimpleForm>
        <TextInput source='agent' defaultValue={agent} disabled hidden />
        <RadioButtonGroupInput
          source='operationType'
          validate={validateOperation}
          onChange={(e) => {
            setopeation(e);
          }}
          choices={[
            { id: "In", name: "In" },
            { id: "Out", name: "Out" },
          ]}
        />
        <SelectInput
          source='nature'
          onChange={(e) => setNature(e.target.value)}
          validate={validateNature}
          choices={
            operation === "In"
              ? [
                  { id: "Inscription", name: "Inscription" },
                  { id: "Assurance", name: "Assurance" },
                  { id: "Manuelles", name: "Manuelles" },
                  { id: "Traducation", name: "Traducation" },
                  { id: "Autres", name: "Autres" },
                ]
              : [
                  { id: "Salaires prof", name: "Salaires prof" },
                  { id: "frs Eau/Elec", name: "frs Eau/Elec" },
                  { id: "frs telecom", name: "frs telecom" },
                  { id: "Autres", name: "Autres" },
                ]
          }
        />
        {operation === "In" ? (
          <AutocompleteInput source='student' choices={students} />
        ) : (
          ""
        )}

        {operation === "Out" && nature === "Salaires prof" ? (
          <AutocompleteInput source='teacher' choices={teachers} />
        ) : (
          ""
        )}
        <SelectInput
          source='libelle'
          validate={validateLibelle}
          choices={[
            { id: "Espèce", name: "Espèce" },
            { id: "Chèque", name: "Chèque" },
            { id: "Carte", name: "Carte" },
            { id: "Virement", name: "Virement" },
          ]}
        />
        <NumberInput validate={validateAmount} source='amount' />
        <TextInput source='comment' />
      </SimpleForm>
    </Create>
  );
};
