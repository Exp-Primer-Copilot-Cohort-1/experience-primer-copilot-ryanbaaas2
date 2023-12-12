function skillsMember() {
    var member = this;
    member.name = 'member';
    member.requires = ['skills'];
    member.factory = function (skills) {
        return {
            name: 'member',
            skills: skills
        };
    };
}