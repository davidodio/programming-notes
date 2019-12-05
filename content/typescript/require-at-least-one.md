# Require at least one property

Useful for typing choices when one property from a specific list must be present.

```typescript
type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];
```

## Example

```typescript
type ContactMethods = 'email' | 'phone' | 'mobile' | 'twitter';

type ContactDetails = {
  [k in ContactMethods]?: string;
};

type Person = {
  name: string;
  contact: RequireAtLeastOne<ContactDetails>;
};

/* Invalid */
const missingContactDetails: Person = { name: 'Bert' };
const emptyContactDetails: Person = { name: 'Bert', contact: {} };
const invalidContactDetails: Person = {
  name: 'Bert',
  contact: { facebook: 'bert' },
};

/* Valid */
const singleContactDetails: Person = {
  name: 'Bert',
  contact: { twitter: '@bert' },
};
const multipleContactDetails: Person = {
  name: 'Bert',
  contact: { twitter: '@bert', mobile: '616223322' },
};
```
