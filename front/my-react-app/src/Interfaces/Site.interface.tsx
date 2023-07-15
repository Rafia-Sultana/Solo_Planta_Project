interface Site {
    length: ReactNode;
    _id: string;
    previous: {
        name: string;
        image: string;
    };
    volume: number;
    temperature: {
        maxValue: number;
        minValue: number;
    },
    userId: {
        profileId: string
    }
}
export default Site;