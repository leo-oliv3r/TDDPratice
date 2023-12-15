export function ageCalculator(birthday: Date, target: Date): number {
    if (isInvalidInput(birthday, target)) {
        throw new Error("Invalid input given");
    }

    if (isSameDate(birthday, target)) {
        return 0;
    }

    const [birthdayYear, targetYear] = [birthday.getFullYear(), target.getFullYear()];

    const age = getCurrentAge(targetYear, birthdayYear);

    return notHadBirthdayYet(birthday, target) ? age - 1 : age;
}

function isInvalidInput(birthday: Date, target: Date) {
    return birthday.getFullYear() > target.getFullYear();
}

function isSameDate(birthday: Date, target: Date) {
    return birthday.toDateString() === target.toDateString();
}

function getCurrentAge(tgtYear: number, bYear: number) {
    return tgtYear - bYear;
}

function notHadBirthdayYet(birthday: Date, target: Date) {
    const bMonth = birthday.getMonth();
    const tgtMonth = target.getMonth();
    const bDay = birthday.getDate();
    const tgtDay = target.getDate();

    return bMonth > tgtMonth || (bMonth === tgtMonth && bDay > tgtDay);
}
