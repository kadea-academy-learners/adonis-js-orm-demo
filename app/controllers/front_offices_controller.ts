import type { HttpContext } from '@adonisjs/core/http'

export default class FrontOfficesController {
  public async homePage({ view }: HttpContext) {
    return view.render('pages/home', {
      pageTitle: 'Wellcom to Blogoss kinshasa',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
  public async aboutPage({ view }: HttpContext) {
    return view.render('pages/about', {
      pageTitle: 'About Blogoss kinshasa',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
  public async servicesPage({ view }: HttpContext) {
    return view.render('pages/services', {
      pageTitle: 'Blogoss kinshasa services',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
  public async blogPage({ view }: HttpContext) {
    return view.render('pages/blog', {
      pageTitle: 'visit our Blogoss kinshasa',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
  public async contactPage({ view }: HttpContext) {
    return view.render('pages/contact', {
      pageTitle: 'Contact Blogoss kinshasa',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
}
