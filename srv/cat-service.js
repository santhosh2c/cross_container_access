const cds = require('@sap/cds')

class CatalogService extends cds.ApplicationService { async init(){
  const db = await cds.connect.to ('db')
  const { Books } = db.entities ('cross')

//   this.on ('Books', async req => {
//     const {book,quantity} = req.data
//     let {stock} = await db.read (Books,book, b => b.stock)
//     if (stock >= quantity) {
//       await db.update (Books,book) .with ({ stock: stock -= quantity })
//       await this.emit ('OrderedBook', { book, quantity, buyer:req.user.id })
//       return req.reply ({ stock })
//     }
//     else return req.error (409,`${quantity} exceeds stock for book #${book}`)
//   })

  this.after ('READ','Books', each => {
    if (each.stock > 111) each.title += ` -- 11% discount!`
  })
  await super.init()
}}

module.exports = { CatalogService }
