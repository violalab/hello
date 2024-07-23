import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="userId.id" reference="User" label="User Id">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
        <TextInput label="Description" multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};
