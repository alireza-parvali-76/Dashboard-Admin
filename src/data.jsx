let xAxisData = [
    {
        "name": "Jan",
        'Sale': 34_000
    },
     {
        "name": "Feb",
        'Sale': 94_000
    },
     {
        "name": "Mar",
        'Sale': 44_000
    },
     {
        "name": "Apr",
        'Sale': 54_000
    },
     {
        "name": "May",
        'Sale': 45_000
    },
     {
        "name": "Jun",
        'Sale': 114_000
    },
     {
        "name": "Jul",
        'Sale': 93_000
    },
     {
        "name": "Aug",
        'Sale': 14_000
    },
     {
        "name": "Sep",
        'Sale': 68_000
    },
     {
        "name": "Oct",
        'Sale': 49_000
    },
     {
        "name": "Nov",
        'Sale': 40_000
    },
     {
        "name": "Dec",
        'Sale': 21_000
    },
]

const newMembers = [
    {
        id: 1,
        username: 'Alireza Parvali',
        title: 'Hacker',
        img: 'images/nature-3082832_1920.jpg'   
    },
    {
        id: 2,
        username: 'Babak Parvali',
        title: 'Weblog',
        img: 'images/nature-3082832_1920.jpg'   
    },
    {
        id: 3,
        username: 'Jamal Parvali',
        title: 'Frontend Dev',
        img: 'images/nature-3082832_1920.jpg'   
    },
    {
        id: 4,
        username: 'Ahmad Parvali',
        title: 'Backend Dev',
        img: 'images/nature-3082832_1920.jpg'   
    },
    {
        id: 5,
        username: 'Nader Parvali',
        title: 'Seo',
        img: 'images/nature-3082832_1920.jpg'   
    }
]

const transaction = [
    {
        id: 1,
        customer: 'farbod',
        date: "14 Jun 2025",
        amount:'199.95',
        status:'Approved',
        img: 'images/nature-3082832_1920.jpg'
    },
     {
        id: 2,
        customer: 'asal',
        date: "14 Jun 2025",
        amount:'199.95',
        status:'Approved',
        img: 'images/nature-3082832_1920.jpg'
    },
     {
        id: 3,
        customer: 'Zahra',
        date: "14 Jun 2025",
        amount:'159.95',
        status:'Declined',
        img: 'images/nature-3082832_1920.jpg'
    },
     {
        id: 4,
        customer: 'Naser',
        date: "14 Jun 2025",
        amount:'19.95',
        status:'Approved',
        img: 'images/nature-3082832_1920.jpg'
    },
     {
        id: 5,
        customer: 'ALireza',
        date: "14 Jun 2025",
        amount:'99.95',
        status:'Pending',
        img: 'images/nature-3082832_1920.jpg'
    }
]

let userRows = [
    {
    id: 1,
    username: 'Alireza Parvali',
    avatar:'images/nature-3082832_1920.jpg',
    status: 'active',
    transaction: '$123.21',
    email: 'alip76@gmail.com'
    },
    {
    id: 2,
    username: 'Zahra Parvali',
    avatar:'images/nature-3082832_1920.jpg',
    status: 'active',
    transaction: '$19.21',
    email: 'alip76@gmail.com'
    },
    {
    id: 3,
    username: 'Abas Parvali',
    avatar:'images/nature-3082832_1920.jpg',
    status: 'active',
    transaction: '$29.21',
    email: 'alip76@gmail.com'
    },
    {
    id: 4,
    username: 'Amir Parvali',
    avatar:'images/nature-3082832_1920.jpg',
    status: 'active',
    transaction: '$129',
    email: 'alip76@gmail.com'
    },
    {
    id: 5,
    username: 'Asal Parvali',
    avatar:'images/nature-3082832_1920.jpg',
    status: 'active',
    transaction: '$1.21',
    email: 'alip76@gmail.com'
    }
]

let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: 'images/nature-3082832_1920.jpg',
        price: 1890
    },
        {
        id: 2,
        title: 'HP',
        avatar: 'images/nature-3082832_1920.jpg',
        price: 890
    },
        {
        id: 3,
        title: 'DELL',
        avatar: 'images/nature-3082832_1920.jpg',
        price: 8290
    },
        {
        id: 4,
        title: 'Ipad',
        avatar: 'images/nature-3082832_1920.jpg',
        price: 8190
    }
]

const productData = [
    {
        name: 'JAn',
        sales: 4000,
    },
    {
        name: 'Feb',
        sales: 1400,
    },
    {
        name: 'Mar',
        sales: 5000,
    },
]

export { xAxisData, newMembers, transaction, userRows, products, productData }