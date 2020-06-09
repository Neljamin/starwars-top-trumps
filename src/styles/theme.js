import TopTrumps from "top-trumps";
import _ from "lodash";

const { defaultTheme } = TopTrumps;

export default _.merge(
    {},
    defaultTheme,
    {
        user: {
            scoreColor: 'white',
            backgroundImage: '/images/user-background.jpg',
            backFace: {
                innerBackgroundColor: '#546940',
            }
        },
        computer: {
            scoreColor: 'white',
            backgroundImage: '/images/computer-background.jpeg',
            backFace: {
                innerBackgroundColor: '#8A0000',
                avatarIconColor: '#000000',
            }
        },
    }
);
