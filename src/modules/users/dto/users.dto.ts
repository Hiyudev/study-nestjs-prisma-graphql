import { InstituitionDTO } from "src/modules/institutions/dto/institutions.dto";

export type UserDTO = {
  id?: string;
  email: string;
  username: string;
  institutionAssociatedID: string;
};

export type UserReturnTypeDTO = {
  email: string;
  username: string;
  institutionAssociatedID: string;
  institutionAssociated: InstituitionDTO;
}