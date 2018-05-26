import uuid from 'uuid/v4'
import { TODO_STATUS, TODO_FILTER, TODO_FILTERABLE } from '~/constants/todo'

export type TodoAttributesType = {
  content?: string;
  status?: TODO_STATUS;
}

export default class Todo {
  private _id: string
  private _content: string
  private _status: TODO_STATUS

  public constructor(attrs: TodoAttributesType) {
    this._id = uuid()
    this._content = attrs.content || ''
    this._status = attrs.status || TODO_STATUS.POOL
  }

  public update({ content, status }: TodoAttributesType) {
    if (content) this._content = content
    if (status) this._status = status
  }

  public updateStatus(status: TODO_STATUS) {
    this.update({ status })
  }

  public updateContent(content: string) {
    this.update({ content })
  }

  public isStatusOf(filter: TODO_FILTER): boolean {
    if (filter === TODO_FILTER.ALL) return true

    return (filter as TODO_FILTERABLE) === (this.status as TODO_FILTERABLE)
  }

  public get id(): string {
    return this._id
  }

  public get content(): string {
    return this._content
  }

  public get status(): TODO_STATUS {
    return this._status
  }
}
