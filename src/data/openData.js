const openData = [
    {
        image: 'https://www.koreapost.co.kr/news/photo/202008/50378_49597_3423.jpg',
        name: 'Samsung',
        location: '[본사] 서울시 강남구',
        sales: '15억 ~ 20억',
        details: '세계적인 IT 기업으로 스마트폰, 반도체 생산을 주로 하는 기업. 연구소는 수원에 위치'
    },
    {
        image: 'https://lh3.googleusercontent.com/proxy/tad7YNxFXw_weeEz0LHIUlOGX9WZYF6VSz5LZZT4mPkrdswfpA9f6zwvDOzFkhE-UKOvXbHGOLsA7D5337dKcBeLnzQB2DVNvm3XiwWKgXO-l_s',
        name: '센터 인 필라테스',
        location: '[본사] 서울시 성북구',
        sales: '6억 ~ 10억',
        details: '전국에 매장을 10개 이상 두고있는 대한민국 최대 규모의 필라테스 사업체 직원수 200명 이상으로...'
    },
    {
        image: 'https://www.koreapost.co.kr/news/photo/202008/50378_49597_3423.jpg',
        name: 'Samsung',
        location: '[본사] 서울시 강남구',
        sales: '15억 ~ 20억',
        details: '세계적인 IT 기업으로 스마트폰, 반도체 생산을 주로 하는 기업. 연구소는 수원에 위치'
    },
    {
        image: 'https://www.koreapost.co.kr/news/photo/202008/50378_49597_3423.jpg',
        name: 'Samsung',
        location: '[본사] 서울시 강남구',
        sales: '15억 ~ 20억',
        details: '세계적인 IT 기업으로 스마트폰, 반도체 생산을 주로 하는 기업. 연구소는 수원에 위치'
    },
    {
        image: 'https://www.koreapost.co.kr/news/photo/202008/50378_49597_3423.jpg',
        name: 'Samsung',
        location: '[본사] 서울시 강남구',
        sales: '15억 ~ 20억',
        details: '세계적인 IT 기업으로 스마트폰, 반도체 생산을 주로 하는 기업. 연구소는 수원에 위치'
    },
    {
        image: 'https://www.koreapost.co.kr/news/photo/202008/50378_49597_3423.jpg',
        name: 'Samsung',
        location: '[본사] 서울시 강남구',
        sales: '15억 ~ 20억',
        details: '세계적인 IT 기업으로 스마트폰, 반도체 생산을 주로 하는 기업. 연구소는 수원에 위치'
    },
    {
        image: 'https://www.koreapost.co.kr/news/photo/202008/50378_49597_3423.jpg',
        name: 'Samsung',
        location: '[본사] 서울시 강남구',
        sales: '15억 ~ 20억',
        details: '세계적인 IT 기업으로 스마트폰, 반도체 생산을 주로 하는 기업. 연구소는 수원에 위치'
    },
    {
        image: 'https://www.koreapost.co.kr/news/photo/202008/50378_49597_3423.jpg',
        name: 'Samsung',
        location: '[본사] 서울시 강남구',
        sales: '15억 ~ 20억',
        details: '세계적인 IT 기업으로 스마트폰, 반도체 생산을 주로 하는 기업. 연구소는 수원에 위치'
    },
    {
        image: 'https://www.koreapost.co.kr/news/photo/202008/50378_49597_3423.jpg',
        name: 'Samsung',
        location: '[본사] 서울시 강남구',
        sales: '15억 ~ 20억',
        details: '세계적인 IT 기업으로 스마트폰, 반도체 생산을 주로 하는 기업. 연구소는 수원에 위치'
    },
    {
        image: 'https://t1.daumcdn.net/liveboard/holapet/0e5f90af436e4c218343073164a5f657.JPG',
        name: 'Samsung',
        location: '[본사] 서울시 강남구',
        sales: '15억 ~ 20억',
        details: '세계적인 IT 기업으로 스마트폰, 반도체 생산을 주로 하는 기업. 연구소는 수원에 위치'
    },
    {
        image: 'data:image/jpeg;base64,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',
        name: 'Samsung',
        location: '[본사] 서울시 강남구',
        sales: '15억 ~ 20억',
        details: '세계적인 IT 기업으로 스마트폰, 반도체 생산을 주로 하는 기업. 연구소는 수원에 위치'
    },
]


export { openData }