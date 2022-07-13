// appliance_repair
import ac_repair from "../assets/appliance_repair/ac_repair.jpg";
import washing_machine_repair from "../assets/appliance_repair/washing_machine_repair.jpg";
import microwave_repair from "../assets/appliance_repair/microwave_repair.jpg";
import water_heater_repair from "../assets/appliance_repair/water_heater_repair.jpg";
import refrigerator_repair from "../assets/appliance_repair/refrigerator_repair.jpg";
import mixer_grinder_repair from "../assets/appliance_repair/mixer_grinder_repair.jpg";
import dishwasher_repair from "../assets/appliance_repair/dishwasher_repair.jpg";
import household_appliances_repair from "../assets/appliance_repair/household_appliances_repair.jpg";


// electrician
import fan from "../assets/electrician/fan.jpg";
import switchboard from "../assets/electrician/switchboard.jpg";
import new_internal_wiring from "../assets/electrician/new_internal_wiring.jpg";
import inverter_servicing from "../assets/electrician/inverter_servicing.jpg";
import cctv_camera from "../assets/electrician/cctv_camera.jpg";
import door_bell from "../assets/electrician/door_bell.jpg";
import fuse from "../assets/electrician/fuse.jpg";
import light_fitting from "../assets/electrician/light_fitting.jpg";

// plumbing
import water_tank from "../assets/plumbing/water_tank.jpg";
import tab_and_mixer from "../assets/plumbing/tab_and_mixer.jpg";
import basin_and_sink from "../assets/plumbing/basin_and_sink.jpg";
import toilet_and_bathroom from "../assets/plumbing/toilet_and_bathroom.jpg";
import water_leakage from "../assets/plumbing/water_leakage.jpg";
import whole_house_plumbing from "../assets/plumbing/whole_house_plumbing.jpg";

// House cleaning
import carpet_cleaning from "../assets/house_cleaning/carpet_cleaning.jpg";
import house_deep_cleaning from "../assets/house_cleaning/house_deep_cleaning.jpg";
import kitchen_deep_cleaning from "../assets/house_cleaning/kitchen_deep_cleaning.jpg";
import pest_control from "../assets/house_cleaning/pest_control.jpg";
import house_painting from "../assets/house_cleaning/house_painting.jpg";
import sweeping_and_mopping from "../assets/house_cleaning/sweeping_and_mopping.jpg";
import dust_cleaning from "../assets/house_cleaning/dust_cleaning.jpg";
import bathroom_cleaning from "../assets/house_cleaning/bathroom_cleaning.jpg";
import furniture_cleaning from "../assets/house_cleaning/furniture_cleaning.jpg";

// online Instructor
import coding from "../assets/online_instructor/coding.jpg";
import health_and_diet from "../assets/online_instructor/health_and_diet.jpg";
import cooking_and_baking from "../assets/online_instructor/cooking_and_baking.jpg";
import fitness_and_gym from "../assets/online_instructor/fitness_and_gym.jpg";
import tuition_for_kids from "../assets/online_instructor/tuition_for_kids.jpg";
import music_instructor from "../assets/online_instructor/music_instructor.jpg";

// Beauty and Spa
import makeup_and_face_care from "../assets/beauty_and_spa/makeup_and_face_care.jpg";
import hairstyling_for_women from "../assets/beauty_and_spa/hairstyling_for_women.jpg";
import massage_and_therapy from "../assets/beauty_and_spa/massage_and_therapy.jpg";
import hair_salon_for_men from "../assets/beauty_and_spa/hair_salon_for_men.jpg";
import skin_care from "../assets/beauty_and_spa/skin_care.jpg";

// Event Management
import complete_event_management from "../assets/event_management/event_management.jpg"
import decoration from "../assets/event_management/decoration.jpg"
import event_planning from "../assets/event_management/event_planning.jpg"
import food_and_catering from "../assets/event_management/food_and_catering.jpg"
import music_and_sound from "../assets/event_management/music_and_sound.jpg"
import photography from "../assets/event_management/photography.jpg"

// Business
import ca_for_business from "../assets/business/ca_for_business.jpg";
import business_consultancy from "../assets/business/business_consultancy.jpg";
import tax_planning from "../assets/business/tax_planning.jpg";
import GST from "../assets/business/GST.jpg";


export const popularServices = [
    {
        id: 'makeup_and_face_care',
        desc: 'Beauty and Spa',
        img: makeup_and_face_care,
        category: 'beauty_and_spa',
        status: "active",
        price: "$120.00",
    },
    {
        id: 'switchboard',
        desc: 'Switch Board Repair',
        img: switchboard,
        category: 'electrician',
        status: "active",
        price: "$120.00",
    },
    {
        id: 'photography',
        desc: 'Photography',
        img: photography,
        category: 'event_management',
        status: "active",
        price: "$120.00",
    },
    {
        id: 'fitness_and_gym',
        desc: 'Fitness and Gym',
        img: fitness_and_gym,
        category: 'online_instructor',
        status: "active",
        price: "$120.00",
    },
    {
        id: 'tax_planning',
        desc: ' Tax Planning',
        img: tax_planning,
        category: 'business',
        status: "active",
        price: "$120.00",
    },
    {
        id: 'carpet_cleaning',
        desc: 'Carpet Cleaning',
        img: carpet_cleaning,
        category: 'house_cleaning',
        status: "active",
        price: "$120.00",
    }

]
export const services_appliance_repair = [
    {
        serviceId: 1,
        id: "ac_repair",
        desc: 'Air Conditioner',
        img: ac_repair,
        checkout_desc: 'We are here to tend to the world class AC repairing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'appliance_repair',
        status: "active",
        price: "$120.00",
    },

    {
        serviceId: 2,
        id: "microwave_repair",
        desc: 'Microwave and Oven',
        img: microwave_repair,
        checkout_desc: 'We are here to tend to the world class Microwave repairing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'appliance_repair',
        status: "active",
        price: "$120.00",

    },
    {
        serviceId: 3,
        id: "mixer_grinder_repair",
        desc: 'Mixer Grinder',
        img: mixer_grinder_repair,
        checkout_desc: 'We are here to tend to the world class Mixer and Grinder repairing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'appliance_repair',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 4,
        id: "refrigerator_repair",
        desc: 'Refrigerator',
        img: refrigerator_repair,
        checkout_desc: 'We are here to tend to the world class Refrigerator repairing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'appliance_repair',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 5,
        id: "washing_machine_repair",
        desc: 'Washing Machine',
        img: washing_machine_repair,
        checkout_desc: 'We are here to tend to the world class Washing Machine repairing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'appliance_repair',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 6,
        id: "water_heater_repair",
        desc: 'Water Heater',
        img: water_heater_repair,
        checkout_desc: 'We are here to tend to the world class Water Heater repairing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'appliance_repair',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 7,
        id: "dishwasher_repair",
        desc: 'Dishwasher',
        img: dishwasher_repair,
        checkout_desc: 'We are here to tend to the world class Dishwasher repairing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'appliance_repair',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 8,
        id: "household_appliance_repair",
        desc: 'Household Appliance',
        img: household_appliances_repair,
        checkout_desc: 'We are here to tend to the world class Household Appliance repairing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'appliance_repair',
        status: "active",
        price: "$120.00",
    }
]
export const services_electrician = [
    {
        serviceId: 9,
        id: 'fan',
        desc: 'Fan Repair and Installation',
        img: fan,
        checkout_desc: 'We are here to tend to the world class Fan repairing or installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'electrician',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 10,
        id: 'switchboard',
        desc: 'Switchboard Repair and Installation',
        img: switchboard,
        checkout_desc: 'We are here to tend to the world class Switchboard repairing and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'electrician',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 11,
        id: 'fuse',
        desc: 'Fuse Repair and Installation',
        img: fuse,
        checkout_desc: 'We are here to tend to the world class Fuse repairing and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'electrician',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 12,
        id: 'new_internal_wiring',
        desc: 'New internal wiring',
        img: new_internal_wiring,
        checkout_desc: 'We are here to tend to the world class Internal Wiring repairing and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'electrician',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 13,
        id: 'inverter_servicing',
        desc: 'Inverter Repair and Installation',
        img: inverter_servicing,
        checkout_desc: 'We are here to tend to the world class Inverter repairing and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'electrician',
        status: "active",
        price: "$120.00",

    },
    {
        serviceId: 14,
        id: 'light_fitting',
        desc: 'Lights Repair and Installation',
        img: light_fitting,
        checkout_desc: 'We are here to tend to the world class Light repairing and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'electrician',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 15,
        id: 'cctv_camera',
        desc: 'CCTV camera Repair and Installation',
        img: cctv_camera,
        checkout_desc: 'We are here to tend to the world class CCTV repairing and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'electrician',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 16,
        id: 'door_bell',
        desc: 'Door bell Repair and Installation',
        img: door_bell,
        checkout_desc: 'We are here to tend to the world class Door Bell repairing and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'electrician',
        status: "active",
        price: "$120.00",
    }
]
export const services_plumbing = [
    {
        serviceId: 17,
        id: 'water_tank',
        desc: 'Water Tank Cleaning and Installation',
        img: water_tank,
        checkout_desc: 'We are here to the give quality Water Tank cleaning and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'plumbing',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 18,
        id: 'tab_and_mixer',
        desc: 'Tab and Mixer Repair and Installation',
        img: tab_and_mixer,
        checkout_desc: 'We are here to the give quality Tab and Mixer repair and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'plumbing',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 19,
        id: 'basin_and_sink',
        desc: 'Basin and Sink Repair and Installation',
        img: basin_and_sink,
        checkout_desc: 'We are here to the give quality Basin and Sink repair and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'plumbing',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 20,
        id: 'toilet_and_bathroom',
        desc: 'Toilet, Bathroom or Kitchen',
        img: toilet_and_bathroom,
        checkout_desc: 'We are here to the give quality Toilet, Bathroom or Kitchen plumbing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'plumbing',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 21,
        id: 'water_leakage',
        desc: 'water Leakage ',
        img: water_leakage,
        checkout_desc: 'We are here to the give quality water leakage fixing service to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'plumbing',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 22,
        id: 'whole_house_plumbing',
        desc: 'Whole House Plumbing ',
        img: whole_house_plumbing,
        checkout_desc: 'We are here to the give quality whole house plumbing repair and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'plumbing',
        status: "active",
        price: "$120.00",
    }
]
export const services_house_cleaning = [
    {
        serviceId: 23,
        id: 'pest_control',
        desc: 'Pest Control ',
        img: pest_control,
        checkout_desc: 'We are here to the give quality Pest control services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'house_cleaning',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 24,
        id: 'house_deep_cleaning',
        desc: 'House Deep Cleaning ',
        img: house_deep_cleaning,
        checkout_desc: 'We are here to the give quality House Deep Cleaning services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'house_cleaning',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 25,
        id: 'kitchen_deep_cleaning',
        desc: 'Kitchen Deep Cleaning ',
        img: kitchen_deep_cleaning,
        checkout_desc: 'We are here to the give quality Kitchen Deep Cleaning services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'house_cleaning',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 26,
        id: 'carpet_cleaning',
        desc: 'Carpet Cleaning',
        img: carpet_cleaning,
        checkout_desc: 'We are here to the give quality Carpet Cleaning services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'house_cleaning',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 27,
        id: 'house_painting',
        desc: 'House Painting',
        img: house_painting,
        checkout_desc: 'We are here to the give quality House Painting services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'house_cleaning',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 28,
        id: 'sweeping_and_moping',
        desc: 'Sweeping and Mopping',
        img: sweeping_and_mopping,
        checkout_desc: 'We are here to the give quality Sweeping and Mopping services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'house_cleaning',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 29,
        id: 'dust_cleaning',
        desc: 'Dust Cleaning',
        img: dust_cleaning,
        checkout_desc: 'We are here to the give quality Dust Cleaning services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'house_cleaning',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 30,
        id: 'furniture_cleaning',
        desc: 'Furniture Cleaning',
        img: furniture_cleaning,
        checkout_desc: 'We are here to the give quality Furniture Cleaning services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'house_cleaning',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 31,
        id: 'bathroom_cleaning',
        desc: 'Bathroom Cleaning',
        img: bathroom_cleaning,
        checkout_desc: 'We are here to the give quality Bathroom Cleaning services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'house_cleaning',
        status: "active",
        price: "$120.00",
    }
]
export const services_online_instructor = [
    {
        serviceId: 32,
        id: 'coding',
        desc: 'Coding Classes',
        img: coding,
        checkout_desc: 'We are here to the give quality Coding Classes to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'online_instructor',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 33,
        id: 'health_and_diet',
        desc: 'health and Diet Consultancy',
        img: health_and_diet,
        checkout_desc: 'We are here to the give quality Health and Diet consultancy to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'online_instructor',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 34,
        id: 'cooking_and_baking',
        desc: 'Cooking and Baking Classes',
        img: cooking_and_baking,
        checkout_desc: 'We are here to the give quality Cooking and Baking Classes to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'online_instructor',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 35,
        id: 'fitness_and_gym',
        desc: 'Fitness and Gym Consultancy',
        img: fitness_and_gym,
        checkout_desc: 'We are here to the give quality Fitness and Gym consultancy to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'online_instructor',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 36,
        id: 'music_instructor',
        desc: 'Music Instructor',
        img: music_instructor,
        checkout_desc: 'We are here to the give quality Music Classes to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'online_instructor',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 37,
        id: 'tuition_for_kids',
        desc: 'Tuition For Kids',
        img: tuition_for_kids,
        checkout_desc: 'We are here to the give quality Tuitions to Kids no matter what it takes. Thanks for Trusting us.',
        category: 'online_instructor',
        status: "active",
        price: "$120.00",
    }
]
export const services_beauty_and_spa = [
    {
        serviceId: 38,
        id: 'makeup_and_face_care',
        desc: 'Makeup and face care',
        img: makeup_and_face_care,
        checkout_desc: 'We are here to the give quality Makeup and face care services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'beauty_and_spa',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 39,
        id: 'hairstyling_for_women',
        desc: 'Hairstyling for women',
        img: hairstyling_for_women,
        checkout_desc: 'We are here to the give quality Hairstyling for Women service to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'beauty_and_spa',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 40,
        id: 'massage_and_therapy',
        desc: 'Massage and Therapy ',
        img: massage_and_therapy,
        checkout_desc: 'We are here to the give quality Massage and Therapy services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'beauty_and_spa',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 41,
        id: 'hair_salon_for_men',
        desc: 'Hair solon for men',
        img: hair_salon_for_men,
        checkout_desc: 'We are here to the give quality Hair salon for men service to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'beauty_and_spa',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 42,
        id: 'skin_care',
        desc: 'Skin Care',
        img: skin_care,
        checkout_desc: 'We are here to the give quality Skin care services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'beauty_and_spa',
        status: "active",
        price: "$120.00",
    }
]
export const services_event_management = [
    {
        serviceId: 43,
        id: 'complete_event_management',
        desc: 'Event Management',
        img: complete_event_management,
        checkout_desc: 'We are here to the give quality Event Management services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'event_management',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 44,
        id: 'decoration',
        desc: 'Decoration',
        img: decoration,
        checkout_desc: 'We are here to the give quality Decoration services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'event_management',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 45,
        id: 'photography',
        desc: 'Photography',
        img: photography,
        checkout_desc: 'We are here to the give quality Photography services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'event_management',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 46,
        id: 'event_planning',
        desc: 'Event Planning',
        img: event_planning,
        checkout_desc: 'We are here to the give quality Event Planning services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'event_management',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 47,
        id: 'food_and_catering',
        desc: 'Food and Catering',
        img: food_and_catering,
        checkout_desc: 'We are here to the give quality Food and Catering services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'event_management',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 48,
        id: 'music_and_sound',
        desc: 'Music and Sound',
        img: music_and_sound,
        checkout_desc: 'We are here to the give quality Music and Sound service to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'event_management',
        status: "active",
        price: "$120.00",
    }
]
export const services_business = [
    {
        serviceId: 49,
        id: 'ca_for_business',
        desc: 'CA For Business ',
        img: ca_for_business,
        checkout_desc: 'We are here to the give quality CA For Business service to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'business',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 50,
        id: 'business_consultancy',
        desc: 'Business Consultancy',
        img: business_consultancy,
        checkout_desc: 'We are here to the give quality Business Consultancy services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'business',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 51,
        id: 'tax_planning',
        desc: 'Tax Planning',
        img: tax_planning,
        checkout_desc: 'We are here to the give quality Tax Planning services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'business',
        status: "active",
        price: "$120.00",
    },
    {
        serviceId: 52,
        id: 'GST',
        desc: 'GST License and Registration',
        img: GST,
        checkout_desc: 'We are here to the give quality GST planning services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'business',
        status: "active",
        price: "$120.00",
    }
]







