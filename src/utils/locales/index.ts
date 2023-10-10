import {
  transportEnLocalization,
  transportHyLocalization,
  transportRuLocalization,
} from "./transport";
import { LocaleDataType } from "./types";

export const localizationData: LocaleDataType = {
  en: {
    transportData: transportEnLocalization,
    home_plan_title: "Make Your Own Ride Plan With Us",
    tour_type_title: "Type of tour",
    destination_title: "Destination",
    days_title: "Days",
    months_title: "Month",
    date_title: "Date",
    search_text: "Search",
    top_suggested_title: "Top Suggestion",
    one_day: "One Day",
    fixed_date: "Fixed Date",
    home_testimonial_title: "What Travelers Think About Us",
    home_payment_title: "We Accept Online Payment!",
    name_text: "Name",
    email_text: "Email",
    phone_number: "Phone Number",
    address_text: "Address",
    next_text: "Next",
    prev_text: "Prev",
    search_your_need: "Search your Need",
    adult_text: "Adult",
    child_text: "Child",
    duration_text: "Duration",
    starting_city: "Starting city",
    next_city: "Next city",
    add_next: "Add Next",
    ride_type: "Ride type",
    add_your_comment: "Add your comment",
    cancel_text: "Cancel",
    submit_text: "Submit",
    loading_text: "Loading...",
    free_cancelation: "Free Cancelation:",
    send_request: "Send Request",
    reviews_title: "Reviews",
    add_reviews: "Add reviews",
    star_text: "Star",
    people_text: "People",
    start_from: "Start From",
    from_yerevan_text: "From Yerevan:",
    from_tbilisi_text: "From Tbilisi/Tehran:",
    per_pax_text: "Per pax",
    rent_from_text: "Rent from",
    available_text: "Available",
    type_text: "Type",
    accessory_pricing_text: "Accessory Pricing",
    time_duration_text: "Time Duration",
    price_text: "Price",
    from_airport_text: "From Airport",
    checkOut_text: "CheckOut",
    checkIn_text: "CheckIn",
    hotel_pricing: "Hotel Pricing",
    the_nearest_settlement_text: "The nearest Settlement",
    entrance_text: "Entrance",
    best_time_text: "Best time",
    route_text: "Route",
    package_details_text: "Package Details",
    related_tours_text: "Related tours",
    vegan_menu: "Vegan menu",
    food_and_drink: "Food And Drinks",
    no_text: "No",
    yes_text: "Yes",
    related_hotels_text: "Related Hotels",
    night_text: "night",
    individual_tour_title: "For individual tours, if in the group are:",
    departure_tour_title: "For the tour with guaranteed departure:",
    price_per_pax_title: "The price per 1 pax",
    firstName: "First Name",
    lastName: "Last Name",
    startDate: "Start Date",
    endDate: "End Date",
    telephone_text: "Telephone",
    additional_info_text: "Additional Information",
    iam_not_robot_text: "I'm not robot",
    agree_with_terms_text: "I agree with the booking terms of this site",
    tour_name_text: "Tour Name",
    tour_modal_title: "Send Tour Request",
    room_text: "Room",
    hotel_modal_title: "Send Hotel Request",
    quantity_text: "Quantity",
    tour_accessories_text: " Tour Accessories",
    car_text: "Car",
    rent_text: "Rent A ",
    see_more_text: "See More",
    read_more_text: "Read More",
    mice_page_title: "Mice",
    not_found_text: "Data not found!",
    mice_type_text: "Mice Type",
    mice_request_text: "Mice Request",
    blog_title: "Travel Blog",
  },
  ru: {
    transportData: transportRuLocalization,
    home_plan_title: "Создайте свой собственный план поездки с нами",
    tour_type_title: "Тип тура",
    destination_title: "Место назначения",
    days_title: "Количество дней",
    date_title: "Дата",
    months_title: "Месяц",
    search_text: "Поиск",
    top_suggested_title: "Топовое предложение",
    one_day: "Однодневные туры",
    fixed_date: "Туры с фиксированными датами",
    home_testimonial_title: "Что о нас думают наши гости",
    home_payment_title: "Мы принимаем онлайн-оплату!",
    name_text: "Имя",
    email_text: "Эл. адрес",
    phone_number: "Номер телефона",
    address_text: "Адрес",
    next_text: "Следующий",
    prev_text: "Предыдущий",
    search_your_need: "Искать необходимое",
    adult_text: "Взрослый",
    child_text: "Ребенок",
    duration_text: "Продолжительность",
    starting_city: "Начальная точка",
    next_city: "Следующий город",
    add_next: "Добавить следующий",
    ride_type: "Тип поездки",
    add_your_comment: "Добавить комментарий",
    cancel_text: "Отмена",
    submit_text: "Отправить",
    loading_text: "Загрузка...",
    free_cancelation: "Бесплатная отмена:",
    send_request: "Отправить запрос",
    reviews_title: "Отзывы",
    add_reviews: "Добавить отзывы",
    star_text: "Звезда",
    people_text: "Люди",
    start_from: "Начать с",
    from_yerevan_text: "Из Еревана",
    per_pax_text: "За человека",
    rent_from_text: "Аренда от",
    available_text: "Доступный",
    type_text: "Тип",
    accessory_pricing_text: "Цены на аксессуары",
    time_duration_text: "Продолжительность",
    price_text: "Цена",
    from_airport_text: "Из аэропорта",
    checkOut_text: "Выезд",
    checkIn_text: "Заезд",
    hotel_pricing: "Цены на гостиницы",
    the_nearest_settlement_text: "Ближайший населенный пункт",
    entrance_text: "Заезд",
    best_time_text: "Лучшее время",
    route_text: "Путь",
    package_details_text: "Детали пакета",
    related_tours_text: "Похожие туры",
    vegan_menu: "Веган меню",
    food_and_drink: "Продукты питания и напитки",
    no_text: "Нет",
    yes_text: "Да",
    related_hotels_text: "Похожие гостиницы",
    night_text: `Ночь","Գիշեր`,
    individual_tour_title: "Для индивидуальных туров, если в группе находятся:",
    departure_tour_title: "На туры с гарантированным выездом:",
    price_per_pax_title: "Цена за 1 человек",
    firstName: "Имя",
    lastName: "Фамилия",
    startDate: "Дата начала",
    endDate: "Дата окончания",
    telephone_text: "Телефон",
    additional_info_text: "Дополнительная информация",
    iam_not_robot_text: "Я не робот",
    agree_with_terms_text: "Согласен с условиями бронирования этого сайта",
    tour_name_text: "Название тура",
    tour_modal_title: "Страница тура",
    room_text: "room",
    hotel_modal_title: "Страница отеля",
    quantity_text: "Количество",
    tour_accessories_text: "Аксессуары для тура",
    car_text: "Машина",
    rent_text: "Арендовать",
    see_more_text: "Показать еще",
    read_more_text: "Читать далее",
    mice_page_title: "MICE",
    not_found_text: "Не найдено",
    mice_type_text: "Тип MICE тура",
    mice_request_text: "Запрос на MICE тур",
    from_tbilisi_text: "Из Тбилиси",
    blog_title: "Блог о путешествиях",
  },
  hy: {
    transportData: transportHyLocalization,
    home_plan_title: "Ստեղծեք ձեր սեփական տուրիստական երթուղին մեզ հետ",
    tour_type_title: "Տուրի տեսակ",
    destination_title: "Նպատակակետ",
    days_title: "Օրերի քանակ",
    date_title: "Ամիս",
    months_title: "Ամիս",
    search_text: "Որոնել",
    top_suggested_title: "Լավագույն առաջարկ",
    one_day: "Մեկօրյա տուրեր",
    fixed_date: "Հաստատված ամսաթվով տուրեր",
    home_testimonial_title: "Ինչ են մտածում մեր հյուրերը մեր մասին",
    home_payment_title: "Մենք ընդունում ենք օնլայն վճարումներ",
    name_text: "Անուն",
    email_text: "Էլ. Փոստ",
    phone_number: "Հեռախոս",
    address_text: "Հասցե",
    next_text: "Հաջորդը",
    prev_text: "Նախորդը",
    search_your_need: "Փնտրել",
    adult_text: "Մեծահասակ",
    child_text: "Երեխա",
    duration_text: "Տևողություն",
    starting_city: "Սկզբնակետ",
    next_city: "Հաջորդ քաղաք",
    add_next: "Ավելացնել հաջորդը",
    ride_type: "Տեսաքարտի տեսաքարտ",
    add_your_comment: "Մեկնաբանություն",
    cancel_text: "Չեղարկել",
    submit_text: "Ուղարկել",
    loading_text: "Բեռնվում է...",
    free_cancelation: "Անվճար չեղարկում.",
    send_request: "Ուղարկել հարցում",
    reviews_title: "Կարծիքներ",
    add_reviews: "Ավելացնել կարծիք",
    star_text: "Աստղ",
    people_text: "Մարդիկ",
    start_from: "Սկսած",
    from_yerevan_text: "Երևանից.",
    per_pax_text: "Մեկ անձի համար",
    rent_from_text: "Վարձակալել սկսած",
    available_text: "Հասանելի է",
    type_text: "Տեսակը",
    accessory_pricing_text: "Աքսեսուարների գներ",
    time_duration_text: "Տևողությունը",
    price_text: "Արժեքը",
    from_airport_text: "Օդանավակայանից",
    checkOut_text: "Մեկնում",
    checkIn_text: "Գրանցում",
    hotel_pricing: "Հյուրանոցների արժեքները",
    the_nearest_settlement_text: "Մոտակա բնակավայրը",
    entrance_text: "Մուտք",
    best_time_text: "Լավագույն ժամանակը",
    route_text: "Ճանապարհը",
    package_details_text: "Փաթեթի մանրամասները",
    related_tours_text: "Նմանատիպ տուրեր",
    vegan_menu: "Վեգան մենյու",
    food_and_drink: "Սնունդ և խմիչք",
    no_text: "Ոչ",
    yes_text: "Այո՛",
    related_hotels_text: "Նմանատիպ հյուրանոցներ",
    night_text: "Գիշեր",
    individual_tour_title:
      "Անհատական ​​տուրերի համար, եթե խմբում.",
    departure_tour_title: "Երաշխավորված մեկնումներով տուրերի համար.",
    price_per_pax_title: "Արժեքը 1 անձի համար",
    firstName: "Անուն",
    lastName: "Ազգանուն",
    startDate: "Մեկնարկի օրը",
    endDate: "Ավարտի օրը",
    telephone_text: "Հեռախոս",
    additional_info_text: "Լրացուցիչ տեղեկություն",
    iam_not_robot_text: "Ես ռոբոտ չեմ",
    agree_with_terms_text: "Համաձայն եմ այս կայքի ամրագրման պայմաններին",
    tour_name_text: "Տուրի անվանումը",
    tour_modal_title: "Տուրի էջ",
    room_text: "Սենյակ",
    hotel_modal_title: "Հյուրանոցի էջ",
    quantity_text: "Քանակ",
    tour_accessories_text: "Պարագաներ տուրի համար",
    car_text: "Մեքենա",
    rent_text: "Վարձակալել",
    see_more_text: "Ավելին",
    read_more_text: "Կարդալ ավելին",
    mice_page_title: "MICE",
    not_found_text: "Չի գտնվել",
    mice_type_text: "MICE տուրի տեսակը",
    mice_request_text: "Հարցում MICE տուրի համար",
    from_tbilisi_text: "Թբիլիսիից",
    blog_title: "Ճանապարհորդական բլոգ"
  },
  // Add other language translations here if needed.
};
