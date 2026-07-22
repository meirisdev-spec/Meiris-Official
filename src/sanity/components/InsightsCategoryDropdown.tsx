import React, { useCallback } from 'react'
import { Select } from '@sanity/ui'
import { StringInputProps, set, unset, useFormValue } from 'sanity'

export function InsightsCategoryDropdown(props: StringInputProps) {
  const { value, onChange } = props
  const tabCategories = (useFormValue(['tabCategories']) as string[]) || []

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
      {tabCategories.filter(Boolean).map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </Select>
  )
}
