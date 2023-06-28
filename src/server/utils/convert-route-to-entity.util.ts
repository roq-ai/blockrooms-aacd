const mapping: Record<string, string> = {
  bookings: 'booking',
  businesses: 'business',
  properties: 'property',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
