
export const Posts_Router = [
    {
        path: '/posts',
        name: 'posts',
        component: () => import('@/pages/PostList.vue'),
        children: [
            {
                path: '/post-about',
                name: 'post-about',
                component: () => import('@/components/PostAbout.vue')
            }
        ]
    }
];