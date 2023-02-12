import { getMemberPopulatedGroup } from './getMemberPopulatedGroup';
import { getRequestsForGroup } from './getRequestsForGroup';

export async function getOwnerPopulatedGroup(groupId: string) {
  const group = await getMemberPopulatedGroup(groupId);
  const requests = await getRequestsForGroup(groupId);
  const populatedGroup = {
    ...group,
    requests,
  };

  return populatedGroup;
}
