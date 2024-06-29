export const menuLinks = computed(()=>[
    {
        label: 'Home',
        to: '/',

    },
    {
        label: 'Projects',
        to: '/projects',
        badge: storeToRefs(useProjectsStore()).count.value

    },
    {
        label: 'Services',
        to: '/services',

    },
    // {
    //     label: 'Pricing',
    //     to: '/pricing',

    // },
    {
        label: 'Contact',
        to: '/contact',

    },
])
