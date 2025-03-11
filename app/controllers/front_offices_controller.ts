import type { HttpContext } from '@adonisjs/core/http'

export default class FrontOfficesController {
  public async homePage({ view }: HttpContext) {
    return view.render('pages/home', {
      pageTitle: 'Wellcom to Blogoss kinshasa',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
}
