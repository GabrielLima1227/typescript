interface Profile{
    username: string;
    bio: string;
    avaterUrl: string;
}

const profileUpdate: Partial<Profile> = {
    username: "Aang",
}

function updateProfile(profile: Profile, update: Partial<Profile>): Profile {
    return {
        ...profile,
        ...update,
    };
}