# automatically generated by the FlatBuffers compiler, do not modify

# namespace: commonpack

import flatbuffers

class ACCOUNT_INFO(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsACCOUNT_INFO(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = ACCOUNT_INFO()
        x.Init(buf, n + offset)
        return x

    # ACCOUNT_INFO
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # ACCOUNT_INFO
    def AccountType(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # ACCOUNT_INFO
    def TargetUserId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # ACCOUNT_INFO
    def TargetUserToken(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # ACCOUNT_INFO
    def TargetUserName(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

def ACCOUNT_INFOStart(builder): builder.StartObject(4)
def ACCOUNT_INFOAddAccountType(builder, accountType): builder.PrependUint64Slot(0, accountType, 0)
def ACCOUNT_INFOAddTargetUserId(builder, targetUserId): builder.PrependUint64Slot(1, targetUserId, 0)
def ACCOUNT_INFOAddTargetUserToken(builder, targetUserToken): builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(targetUserToken), 0)
def ACCOUNT_INFOAddTargetUserName(builder, targetUserName): builder.PrependUOffsetTRelativeSlot(3, flatbuffers.number_types.UOffsetTFlags.py_type(targetUserName), 0)
def ACCOUNT_INFOEnd(builder): return builder.EndObject()