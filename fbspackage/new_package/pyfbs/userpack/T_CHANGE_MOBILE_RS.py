# automatically generated by the FlatBuffers compiler, do not modify

# namespace: userpack

import flatbuffers

class T_CHANGE_MOBILE_RS(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_CHANGE_MOBILE_RS(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_CHANGE_MOBILE_RS()
        x.Init(buf, n + offset)
        return x

    # T_CHANGE_MOBILE_RS
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_CHANGE_MOBILE_RS
    def SRsHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RS_HEAD import S_RS_HEAD
            obj = S_RS_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_CHANGE_MOBILE_RS
    def OldMoblie(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_CHANGE_MOBILE_RS
    def NewMoblie(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

def T_CHANGE_MOBILE_RSStart(builder): builder.StartObject(3)
def T_CHANGE_MOBILE_RSAddSRsHead(builder, sRsHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRsHead), 0)
def T_CHANGE_MOBILE_RSAddOldMoblie(builder, oldMoblie): builder.PrependUint64Slot(1, oldMoblie, 0)
def T_CHANGE_MOBILE_RSAddNewMoblie(builder, newMoblie): builder.PrependUint64Slot(2, newMoblie, 0)
def T_CHANGE_MOBILE_RSEnd(builder): return builder.EndObject()