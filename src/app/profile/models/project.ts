import { IBaseModel } from '@models/@model'
import { Repository } from '@models/repository'

export interface IProject extends IBaseModel {
  // ======================================= //
  repository?: Repository;
  // ======================================= //
}
