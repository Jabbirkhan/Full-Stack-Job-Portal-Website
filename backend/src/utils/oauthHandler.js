import { User } from "../models/userModel.js";

const oAuthHandler = async ({provider, providerId, name, email, avatar}) => {
    let user;

    user = await User.findOne({ providerId, provider });
    if (!user && email) {
        user = await User.findOne({ email });
        if (user) {
            user.provider = provider;
            user.providerId = providerId;
            user.avatar = avatar;
            await user.save();
        }
    }
    if (!user) {
        user = await User.create({
            name,
            email,
            password: null,
            provider,
            providerId,
            avatar,
        });
    }
    return user;
}

export default oAuthHandler;