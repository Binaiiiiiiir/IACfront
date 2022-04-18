import { useEffect, useState } from "react";import { Edit, SimpleForm, SelectInput, TextInput } from "react-admin";
export const CashEdit = (props) => {
  const [agent, setAgent] = useState("");
  useEffect(() => {
    setAgent(localStorage.getItem("userId"));
  }, []);
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source='agent' defaultValue={agent} disabled hidden />

        <SelectInput
          source='etat'
          choices={[
            { id: "Saisie", name: "Saisie" },
            { id: "Annulé", name: "Annulé" },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};
