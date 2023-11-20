import { IInputFields } from './inputFields.interface'

export interface UserData extends IInputFields {
	id: number
}

export interface User {
	token: string
	data: UserData
}
