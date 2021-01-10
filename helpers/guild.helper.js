/**
 * Fetchs all users
 * @param {Guild} guild - discord guild
 * @returns { Promise<Collection<Snowflake, GuildMember>>}
 */
const fetchMembers = (guild) => {
  const members = guild.members.fetch();

  return members;
};

/**
 * Finds member by its tag
 * @param {Guild} guild - discord guild
 * @param {string} tag - discord user tag
 * @returns { Promise<GuildMember>|undefined }
 */
const findMemberByTag = async (guild, tag) => {
  const members = await fetchMembers(guild);

  if (!members) return undefined;

  const member = members.find(({ user }) => {
    const memberTag = `${user.username}#${user.discriminator}`;

    return memberTag === tag;
  });

  return member;
};

module.exports = {
  fetchMembers,
  findMemberByTag,
};
