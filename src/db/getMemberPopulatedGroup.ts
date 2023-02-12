import { getGroup } from './getGroup';
import { getMessagesForGroup } from './getMessagesForGroup';

export async function getMemberPopulatedGroup(groupId: string) {
  const group = await getGroup(groupId);
  const messagesForGroup = await getMessagesForGroup(groupId);
  const populatedGroup = {
    ...group,
    messages: messagesForGroup,
  };

  return populatedGroup;
}
