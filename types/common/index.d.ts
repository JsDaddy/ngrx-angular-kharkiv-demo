type Product =  {
  id: number,
  title: string,
  description: string,
  photo: string,
  price: number,
  amount?: number,
  type: string
}

type User = {
  email?: string,
  password?: string
}

type AppState = {
  product: Product[],
  cart: Product[],
  auth: User | boolean,
  form: any
}

type UserForm = {
  name: string,
  email: string,
  phone: string,
  address: string
}
