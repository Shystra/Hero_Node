interface ICreate {
  name: string; 
  phone: string;
  date: Date;
  user_id: string;
}

interface IByDate{
  date: Date,
  user_id: string,


}

interface IUpdate {
}

export { ICreate }
export { IUpdate }
export { IByDate }