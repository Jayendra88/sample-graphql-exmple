const orders = [{
  orderId: "1",
  orderTotal: "50",
  items: [
    {
      itemId: "1_a",
      price: "20",
      name: "Test Item 1"
    },
    {
      itemId: "2_a",
      price: "30",
      name: "Test Item 2"
    }
  ]
},
{
  orderId: "2",
  orderTotal: "30",
  items: [
    {
      itemId: "3_a",
      price: "30",
      name: "Test Item 3"
    }
  ]
}]

export const queries = {
  //, context: Context
  getOrders: (_: any, args: any) => {
    console.log(JSON.stringify(args))
    // console.log('this is test')
    return orders
  },
}
