export interface IRoleProps {
  id?: number
  name: string
  description: string
  createdAt?: Date
}

export class RoleModel {
  public readonly id?: number
  public readonly name: string
  public readonly description: string
  public readonly createdAt?: Date

  constructor (props: IRoleProps) {
    this.id = props.id
    this.name = props.name
    this.description = props.description
    this.createdAt = props.createdAt
  }
}
