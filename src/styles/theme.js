import TopTrumps from "top-trumps";
import _ from "lodash";

const { defaultTheme } = TopTrumps;

export default _.merge(
    {},
    defaultTheme,
    {
        user: {
            scoreColor: 'white',
            backgroundImage: 'https://i.imgur.com/SnroKpK.jpg',
            backFace: {
                innerBackgroundColor: '#546940',
            }
        },
        computer: {
            scoreColor: 'white',
            backgroundImage: 'https://i.imgur.com/BR7Fd0a.jpg',
            backFace: {
                innerBackgroundColor: '#8A0000',
                avatarIconColor: '#000000',
            }
        },
    }
);
