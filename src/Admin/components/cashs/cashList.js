import { Datagrid, List, ReferenceField, TextField } from "react-admin";
export const CashList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='operationType' />
      <ReferenceField
        sortable={false}
        label='Student'
        source='student'
        reference='student'
      >
        <TextField source='name' />
      </ReferenceField>
      <ReferenceField
        sortable={false}
        label='Teacher'
        source='teacher'
        reference='teacher'
      >
        <TextField source='name' />
      </ReferenceField>
      <TextField source='amount' />
      <TextField source='nature' />
      <ReferenceField
        sortable={false}
        label='Agent'
        source='agent'
        reference='user'
      >
        <TextField source='name' />
      </ReferenceField>
      <TextField source='comment' />
      <TextField source='etat' />
    </Datagrid>
  </List>
);
