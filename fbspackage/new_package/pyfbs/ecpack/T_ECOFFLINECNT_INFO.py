# automatically generated by the FlatBuffers compiler, do not modify

# namespace: ecpack

import flatbuffers

class T_ECOFFLINECNT_INFO(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_ECOFFLINECNT_INFO(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_ECOFFLINECNT_INFO()
        x.Init(buf, n + offset)
        return x

    # T_ECOFFLINECNT_INFO
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_ECOFFLINECNT_INFO
    def BId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_ECOFFLINECNT_INFO
    def Cnt(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint32Flags, o + self._tab.Pos)
        return 0

def T_ECOFFLINECNT_INFOStart(builder): builder.StartObject(2)
def T_ECOFFLINECNT_INFOAddBId(builder, bId): builder.PrependUint64Slot(0, bId, 0)
def T_ECOFFLINECNT_INFOAddCnt(builder, cnt): builder.PrependUint32Slot(1, cnt, 0)
def T_ECOFFLINECNT_INFOEnd(builder): return builder.EndObject()