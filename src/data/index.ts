import { AddOn, Plan } from '../types';

export const plans :Plan[] = [
                        { name: 'Arcade', price: 9, freeMonthsYearly: 2, icon: '/images/icon-arcade.svg' },
                        { name: 'Advanced', price: 12, freeMonthsYearly: 2, icon: '/images/icon-advanced.svg' },
                        { name: 'Pro', price: 15, freeMonthsYearly: 2, icon: '/images/icon-pro.svg' },
                      ];
export const addons :AddOn[] = [
                        { name: 'Online service', price: 1, details: 'Access to multiplayer games'},
                        { name: 'Larger storage', price: 2, details: 'Extra 1TB of cloud save'},
                        { name: 'Customizable profile', price: 2, details: 'Custom theme on your profile'},
                    ];