const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))

app.use( async ( ctx ) => {
  await ctx.render('index', {
    title:'hello koa2',
    sub_title:'Koa@2x',
    name:'sonic',
  })
})

app.listen(3000, ()=>{
  console.log('[demo] ejs is starting at port 3000')
})

