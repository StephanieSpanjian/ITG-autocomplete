'use client'

import { FocusEventHandler, useState } from 'react'
import { createPortal } from 'react-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { debounce } from 'lodash'
import SearchResultsList from './SearchResultsList'

type FormValues = {
  q: string
}

const SearchInput = () => {
  const minStringLength = 2
  const [q, setSearchValue] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [showResults, setSearchResults] = useState(false)

  const { register, handleSubmit } = useForm<FormValues>()

  const onChange: FocusEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value)
    if (e.target.value.length >= minStringLength) {
      setSearchResults(true)
    }
  }
  const onFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value)
    if (e.target.value.length >= minStringLength) {
      setSearchResults(true)
    }
  }

  const onSubmit: SubmitHandler<FormValues> = (data: { q: string }) => {
    const { q } = data

    setSearchValue(q)
    if (q.length >= minStringLength) {
      setSearchResults(true)
    }
  }

  const debouncedOnChange = debounce(onChange, 500)

  const showSearchModalButton = (
    <button onClick={() => setShowModal(true)}>
      <svg
        width="20"
        height="20"
        className="Search-Icon"
        viewBox="0 0 20 20"
      >
        <path
          d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
          stroke="currentColor"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
  )

  const closeSearchModalButton = (
    <button
      onClick={() => setShowModal(false)}
      className="align-bottom"
    >
      x
    </button>
  )

  return (
    <div>
      {showSearchModalButton}
      {createPortal(
        <div
          className=" bg-slate-600 py-4 text-slate-100"
          style={{
            opacity: '90%',
            position: 'absolute',
            height: '100vh',
            width: '100vw',
            display: showModal ? 'block' : 'none',
            zIndex: '999',
          }}
        >
          <form
            className=" bg-slate-500 rounded-md p-2"
            onSubmit={handleSubmit(onSubmit)}
            style={{
              margin: 'auto',
              height: '80vh',
              width: '80vw',
              zIndex: '9999',
            }}
          >
            <div className="grid grid-cols-1 gap-4 place-content-center">
              <input
                className="text-slate-900 focus:outline-none focus-visible:ring rounded-md"
                autoComplete="off"
                aria-autocomplete="list"
                type="text"
                {...register('q')}
                onBlur={onFocus}
                onChange={debouncedOnChange}
                onFocus={onFocus}
                placeholder="Search..."
              />
              <div className={`relative ${showResults ? '' : 'hidden'}`}>
                {q ? <SearchResultsList q={q} /> : null}
              </div>
              {closeSearchModalButton}
            </div>
          </form>
        </div>,
        document.body
      )}
    </div>
  )
}

export default SearchInput
