# automatically generated by the FlatBuffers compiler, do not modify

# namespace: friendpack

import flatbuffers

class T_FRIEND_LIST_RS(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_FRIEND_LIST_RS(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_FRIEND_LIST_RS()
        x.Init(buf, n + offset)
        return x

    # T_FRIEND_LIST_RS
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_FRIEND_LIST_RS
    def SRsHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RS_HEAD import S_RS_HEAD
            obj = S_RS_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_FRIEND_LIST_RS
    def FriendList(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from .T_FREIND_INFO import T_FREIND_INFO
            obj = T_FREIND_INFO()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_FRIEND_LIST_RS
    def FriendListLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # T_FRIEND_LIST_RS
    def Token(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_FRIEND_LIST_RS
    def MsgSource(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int32Flags, o + self._tab.Pos)
        return 0

def T_FRIEND_LIST_RSStart(builder): builder.StartObject(4)
def T_FRIEND_LIST_RSAddSRsHead(builder, sRsHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRsHead), 0)
def T_FRIEND_LIST_RSAddFriendList(builder, friendList): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(friendList), 0)
def T_FRIEND_LIST_RSStartFriendListVector(builder, numElems): return builder.StartVector(4, numElems, 4)
def T_FRIEND_LIST_RSAddToken(builder, token): builder.PrependUint64Slot(2, token, 0)
def T_FRIEND_LIST_RSAddMsgSource(builder, msgSource): builder.PrependInt32Slot(3, msgSource, 0)
def T_FRIEND_LIST_RSEnd(builder): return builder.EndObject()
