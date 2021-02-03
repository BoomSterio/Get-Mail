const messages = [
    {
        id: 0,
        subject: 'New movie',
        body: 'dasdaw',
        from: 'ttt@cnkl.sa',
        to: ['111@sjs.re'],
        date: '15-12-2020'
    },
    {
        id: 1,
        subject: 'Promo',
        body: 'dasdasdsdfdxzaw',
        from: 'rrr@cnkl.sa',
        to: ['333@sjs.re'],
        date: '01-01-2021'
    },
    {
        id: 2,
        subject: 'Hello World!',
        body: 'daszczxcxzczxdaw',
        from: 'eee@cnkl.sa',
        to: ['111@sjs.re', '222@sah.com', '333@xj.we'],
        date: '11-01-2021'
    },
    {
        id: 3,
        subject: 'You are a new member',
        body: 'das12edddasdasdss12dasdaw',
        from: 'www@cnkl.sa',
        to: ['222@sjs.re'],
        date: '20-01-2021'
    },
    {
        id: 4,
        subject: 'Students!',
        body: 'dasdwqqe213123daw',
        from: 'qqq@cnkl.sa',
        to: ['111@sjs.re', '222@sah.com'],
        date: '30-01-2021'
    },
    {
        id: 5,
        subject: 'Your order was sent. You can track your order #0812u747121228',
        body: 'dasdwqqe213123aduh893w8ru8eiusdhfsy783whfsuihf78ewhfsfu87dsdasdasoidhh78 78y78 dsasas8fys8idaw',
        from: 'yyy@cnkl.sa',
        to: ['aaa@sjs.re', '222@sah.com'],
        date: '31-01-2021'
    },
    {
        id: 6,
        subject: 'Math final exam results',
        body: 'uh893w8ru8eiusdhfsy783whfsu78ewhfsfu87dsdasdasoidhh78 y71328 dsas8fys8idaw',
        from: 'ttt@cnkl.sa',
        to: ['hhh@sjs.re', 'uuu@sah.com', 'iii@qqq.ww', 'ooo@qqq.ww'],
        date: '31-01-2021'
    },
]

export const mailAPI = {
    requestMessages() {
        let data = {
            messages: messages,
            resultCode: 0
        }

        return data
    },
    deleteMessages(identifiers) {
        identifiers.forEach(id => {console.log(`message #${id} successfully deleted from server`)})

        let data = {resultCode: 0}

        return data
    }
}