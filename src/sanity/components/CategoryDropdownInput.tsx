import React, { useCallback } from 'react'
import { Select } from '@sanity/ui'
import { StringInputProps, set, unset, useFormValue } from 'sanity'

export function CategoryDropdownInput(props: StringInputProps) {
  const { value, onChange } = props
  
  // Fetch the tabCategories array from the current document
  // It handles real-time typing as the user updates it!
  const categories = useFormValue(['tabCategories']) as string[] | undefined

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const nextValue = event.currentTarget.value
      onChange(nextValue ? set(nextValue) : unset())
    },
    [onChange]
  )

  return (
    <Select value={value || ''} onChange={handleChange}>
      <option value="">-- Select a category --</option>
      {categories?.filter(Boolean).map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </Select>
  )
}
