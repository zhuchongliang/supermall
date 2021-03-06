export default {
  addCart(context, payload) {
    return new Promise(function (resolve, reject) {
      let oldProduct = context.state.cartList.find(item => item.iid == payload.iid);
      if (oldProduct) {
        context.commit('addCount', oldProduct);
        resolve("商品数量加1");
      }
      else {
        payload.count = 1;
        context.commit('addProduct', payload);
        resolve("商品添加成功")
      }
    })
  }
}